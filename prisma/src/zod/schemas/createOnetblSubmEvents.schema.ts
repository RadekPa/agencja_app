import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblSubmEventsSelectObjectSchema as tblSubmEventsSelectObjectSchema } from './objects/tblSubmEventsSelect.schema';
import { tblSubmEventsIncludeObjectSchema as tblSubmEventsIncludeObjectSchema } from './objects/tblSubmEventsInclude.schema';
import { tblSubmEventsCreateInputObjectSchema as tblSubmEventsCreateInputObjectSchema } from './objects/tblSubmEventsCreateInput.schema';
import { tblSubmEventsUncheckedCreateInputObjectSchema as tblSubmEventsUncheckedCreateInputObjectSchema } from './objects/tblSubmEventsUncheckedCreateInput.schema';

export const tblSubmEventsCreateOneSchema: z.ZodType<Prisma.tblSubmEventsCreateArgs> = z.object({ select: tblSubmEventsSelectObjectSchema.optional(), include: tblSubmEventsIncludeObjectSchema.optional(), data: z.union([tblSubmEventsCreateInputObjectSchema, tblSubmEventsUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.tblSubmEventsCreateArgs>;

export const tblSubmEventsCreateOneZodSchema = z.object({ select: tblSubmEventsSelectObjectSchema.optional(), include: tblSubmEventsIncludeObjectSchema.optional(), data: z.union([tblSubmEventsCreateInputObjectSchema, tblSubmEventsUncheckedCreateInputObjectSchema]) }).strict();