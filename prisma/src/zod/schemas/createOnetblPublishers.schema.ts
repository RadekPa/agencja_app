import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPublishersSelectObjectSchema as tblPublishersSelectObjectSchema } from './objects/tblPublishersSelect.schema';
import { tblPublishersIncludeObjectSchema as tblPublishersIncludeObjectSchema } from './objects/tblPublishersInclude.schema';
import { tblPublishersCreateInputObjectSchema as tblPublishersCreateInputObjectSchema } from './objects/tblPublishersCreateInput.schema';
import { tblPublishersUncheckedCreateInputObjectSchema as tblPublishersUncheckedCreateInputObjectSchema } from './objects/tblPublishersUncheckedCreateInput.schema';

export const tblPublishersCreateOneSchema: z.ZodType<Prisma.tblPublishersCreateArgs> = z.object({ select: tblPublishersSelectObjectSchema.optional(), include: tblPublishersIncludeObjectSchema.optional(), data: z.union([tblPublishersCreateInputObjectSchema, tblPublishersUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.tblPublishersCreateArgs>;

export const tblPublishersCreateOneZodSchema = z.object({ select: tblPublishersSelectObjectSchema.optional(), include: tblPublishersIncludeObjectSchema.optional(), data: z.union([tblPublishersCreateInputObjectSchema, tblPublishersUncheckedCreateInputObjectSchema]) }).strict();