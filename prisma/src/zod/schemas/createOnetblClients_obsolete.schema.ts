import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblClients_obsoleteSelectObjectSchema as tblClients_obsoleteSelectObjectSchema } from './objects/tblClients_obsoleteSelect.schema';
import { tblClients_obsoleteIncludeObjectSchema as tblClients_obsoleteIncludeObjectSchema } from './objects/tblClients_obsoleteInclude.schema';
import { tblClients_obsoleteCreateInputObjectSchema as tblClients_obsoleteCreateInputObjectSchema } from './objects/tblClients_obsoleteCreateInput.schema';
import { tblClients_obsoleteUncheckedCreateInputObjectSchema as tblClients_obsoleteUncheckedCreateInputObjectSchema } from './objects/tblClients_obsoleteUncheckedCreateInput.schema';

export const tblClients_obsoleteCreateOneSchema: z.ZodType<Prisma.tblClients_obsoleteCreateArgs> = z.object({ select: tblClients_obsoleteSelectObjectSchema.optional(), include: tblClients_obsoleteIncludeObjectSchema.optional(), data: z.union([tblClients_obsoleteCreateInputObjectSchema, tblClients_obsoleteUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.tblClients_obsoleteCreateArgs>;

export const tblClients_obsoleteCreateOneZodSchema = z.object({ select: tblClients_obsoleteSelectObjectSchema.optional(), include: tblClients_obsoleteIncludeObjectSchema.optional(), data: z.union([tblClients_obsoleteCreateInputObjectSchema, tblClients_obsoleteUncheckedCreateInputObjectSchema]) }).strict();