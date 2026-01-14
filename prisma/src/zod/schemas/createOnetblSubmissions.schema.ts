import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblSubmissionsSelectObjectSchema as tblSubmissionsSelectObjectSchema } from './objects/tblSubmissionsSelect.schema';
import { tblSubmissionsIncludeObjectSchema as tblSubmissionsIncludeObjectSchema } from './objects/tblSubmissionsInclude.schema';
import { tblSubmissionsCreateInputObjectSchema as tblSubmissionsCreateInputObjectSchema } from './objects/tblSubmissionsCreateInput.schema';
import { tblSubmissionsUncheckedCreateInputObjectSchema as tblSubmissionsUncheckedCreateInputObjectSchema } from './objects/tblSubmissionsUncheckedCreateInput.schema';

export const tblSubmissionsCreateOneSchema: z.ZodType<Prisma.tblSubmissionsCreateArgs> = z.object({ select: tblSubmissionsSelectObjectSchema.optional(), include: tblSubmissionsIncludeObjectSchema.optional(), data: z.union([tblSubmissionsCreateInputObjectSchema, tblSubmissionsUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.tblSubmissionsCreateArgs>;

export const tblSubmissionsCreateOneZodSchema = z.object({ select: tblSubmissionsSelectObjectSchema.optional(), include: tblSubmissionsIncludeObjectSchema.optional(), data: z.union([tblSubmissionsCreateInputObjectSchema, tblSubmissionsUncheckedCreateInputObjectSchema]) }).strict();