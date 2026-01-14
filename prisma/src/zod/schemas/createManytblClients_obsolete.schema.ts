import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblClients_obsoleteCreateManyInputObjectSchema as tblClients_obsoleteCreateManyInputObjectSchema } from './objects/tblClients_obsoleteCreateManyInput.schema';

export const tblClients_obsoleteCreateManySchema: z.ZodType<Prisma.tblClients_obsoleteCreateManyArgs> = z.object({ data: z.union([ tblClients_obsoleteCreateManyInputObjectSchema, z.array(tblClients_obsoleteCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.tblClients_obsoleteCreateManyArgs>;

export const tblClients_obsoleteCreateManyZodSchema = z.object({ data: z.union([ tblClients_obsoleteCreateManyInputObjectSchema, z.array(tblClients_obsoleteCreateManyInputObjectSchema) ]),  }).strict();