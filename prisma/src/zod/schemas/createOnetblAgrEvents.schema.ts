import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblAgrEventsSelectObjectSchema as tblAgrEventsSelectObjectSchema } from './objects/tblAgrEventsSelect.schema';
import { tblAgrEventsIncludeObjectSchema as tblAgrEventsIncludeObjectSchema } from './objects/tblAgrEventsInclude.schema';
import { tblAgrEventsCreateInputObjectSchema as tblAgrEventsCreateInputObjectSchema } from './objects/tblAgrEventsCreateInput.schema';
import { tblAgrEventsUncheckedCreateInputObjectSchema as tblAgrEventsUncheckedCreateInputObjectSchema } from './objects/tblAgrEventsUncheckedCreateInput.schema';

export const tblAgrEventsCreateOneSchema: z.ZodType<Prisma.tblAgrEventsCreateArgs> = z.object({ select: tblAgrEventsSelectObjectSchema.optional(), include: tblAgrEventsIncludeObjectSchema.optional(), data: z.union([tblAgrEventsCreateInputObjectSchema, tblAgrEventsUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.tblAgrEventsCreateArgs>;

export const tblAgrEventsCreateOneZodSchema = z.object({ select: tblAgrEventsSelectObjectSchema.optional(), include: tblAgrEventsIncludeObjectSchema.optional(), data: z.union([tblAgrEventsCreateInputObjectSchema, tblAgrEventsUncheckedCreateInputObjectSchema]) }).strict();