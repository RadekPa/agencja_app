import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblClients_obsoleteSelectObjectSchema as tblClients_obsoleteSelectObjectSchema } from './objects/tblClients_obsoleteSelect.schema';
import { tblClients_obsoleteIncludeObjectSchema as tblClients_obsoleteIncludeObjectSchema } from './objects/tblClients_obsoleteInclude.schema';
import { tblClients_obsoleteWhereUniqueInputObjectSchema as tblClients_obsoleteWhereUniqueInputObjectSchema } from './objects/tblClients_obsoleteWhereUniqueInput.schema';
import { tblClients_obsoleteCreateInputObjectSchema as tblClients_obsoleteCreateInputObjectSchema } from './objects/tblClients_obsoleteCreateInput.schema';
import { tblClients_obsoleteUncheckedCreateInputObjectSchema as tblClients_obsoleteUncheckedCreateInputObjectSchema } from './objects/tblClients_obsoleteUncheckedCreateInput.schema';
import { tblClients_obsoleteUpdateInputObjectSchema as tblClients_obsoleteUpdateInputObjectSchema } from './objects/tblClients_obsoleteUpdateInput.schema';
import { tblClients_obsoleteUncheckedUpdateInputObjectSchema as tblClients_obsoleteUncheckedUpdateInputObjectSchema } from './objects/tblClients_obsoleteUncheckedUpdateInput.schema';

export const tblClients_obsoleteUpsertOneSchema: z.ZodType<Prisma.tblClients_obsoleteUpsertArgs> = z.object({ select: tblClients_obsoleteSelectObjectSchema.optional(), include: tblClients_obsoleteIncludeObjectSchema.optional(), where: tblClients_obsoleteWhereUniqueInputObjectSchema, create: z.union([ tblClients_obsoleteCreateInputObjectSchema, tblClients_obsoleteUncheckedCreateInputObjectSchema ]), update: z.union([ tblClients_obsoleteUpdateInputObjectSchema, tblClients_obsoleteUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.tblClients_obsoleteUpsertArgs>;

export const tblClients_obsoleteUpsertOneZodSchema = z.object({ select: tblClients_obsoleteSelectObjectSchema.optional(), include: tblClients_obsoleteIncludeObjectSchema.optional(), where: tblClients_obsoleteWhereUniqueInputObjectSchema, create: z.union([ tblClients_obsoleteCreateInputObjectSchema, tblClients_obsoleteUncheckedCreateInputObjectSchema ]), update: z.union([ tblClients_obsoleteUpdateInputObjectSchema, tblClients_obsoleteUncheckedUpdateInputObjectSchema ]) }).strict();