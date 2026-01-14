import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblClients_obsoleteSelectObjectSchema as tblClients_obsoleteSelectObjectSchema } from './objects/tblClients_obsoleteSelect.schema';
import { tblClients_obsoleteIncludeObjectSchema as tblClients_obsoleteIncludeObjectSchema } from './objects/tblClients_obsoleteInclude.schema';
import { tblClients_obsoleteUpdateInputObjectSchema as tblClients_obsoleteUpdateInputObjectSchema } from './objects/tblClients_obsoleteUpdateInput.schema';
import { tblClients_obsoleteUncheckedUpdateInputObjectSchema as tblClients_obsoleteUncheckedUpdateInputObjectSchema } from './objects/tblClients_obsoleteUncheckedUpdateInput.schema';
import { tblClients_obsoleteWhereUniqueInputObjectSchema as tblClients_obsoleteWhereUniqueInputObjectSchema } from './objects/tblClients_obsoleteWhereUniqueInput.schema';

export const tblClients_obsoleteUpdateOneSchema: z.ZodType<Prisma.tblClients_obsoleteUpdateArgs> = z.object({ select: tblClients_obsoleteSelectObjectSchema.optional(), include: tblClients_obsoleteIncludeObjectSchema.optional(), data: z.union([tblClients_obsoleteUpdateInputObjectSchema, tblClients_obsoleteUncheckedUpdateInputObjectSchema]), where: tblClients_obsoleteWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblClients_obsoleteUpdateArgs>;

export const tblClients_obsoleteUpdateOneZodSchema = z.object({ select: tblClients_obsoleteSelectObjectSchema.optional(), include: tblClients_obsoleteIncludeObjectSchema.optional(), data: z.union([tblClients_obsoleteUpdateInputObjectSchema, tblClients_obsoleteUncheckedUpdateInputObjectSchema]), where: tblClients_obsoleteWhereUniqueInputObjectSchema }).strict();