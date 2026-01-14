import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblClients_obsoleteUpdateManyMutationInputObjectSchema as tblClients_obsoleteUpdateManyMutationInputObjectSchema } from './objects/tblClients_obsoleteUpdateManyMutationInput.schema';
import { tblClients_obsoleteWhereInputObjectSchema as tblClients_obsoleteWhereInputObjectSchema } from './objects/tblClients_obsoleteWhereInput.schema';

export const tblClients_obsoleteUpdateManySchema: z.ZodType<Prisma.tblClients_obsoleteUpdateManyArgs> = z.object({ data: tblClients_obsoleteUpdateManyMutationInputObjectSchema, where: tblClients_obsoleteWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblClients_obsoleteUpdateManyArgs>;

export const tblClients_obsoleteUpdateManyZodSchema = z.object({ data: tblClients_obsoleteUpdateManyMutationInputObjectSchema, where: tblClients_obsoleteWhereInputObjectSchema.optional() }).strict();