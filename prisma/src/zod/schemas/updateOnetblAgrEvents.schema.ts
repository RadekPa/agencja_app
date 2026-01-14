import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblAgrEventsSelectObjectSchema as tblAgrEventsSelectObjectSchema } from './objects/tblAgrEventsSelect.schema';
import { tblAgrEventsIncludeObjectSchema as tblAgrEventsIncludeObjectSchema } from './objects/tblAgrEventsInclude.schema';
import { tblAgrEventsUpdateInputObjectSchema as tblAgrEventsUpdateInputObjectSchema } from './objects/tblAgrEventsUpdateInput.schema';
import { tblAgrEventsUncheckedUpdateInputObjectSchema as tblAgrEventsUncheckedUpdateInputObjectSchema } from './objects/tblAgrEventsUncheckedUpdateInput.schema';
import { tblAgrEventsWhereUniqueInputObjectSchema as tblAgrEventsWhereUniqueInputObjectSchema } from './objects/tblAgrEventsWhereUniqueInput.schema';

export const tblAgrEventsUpdateOneSchema: z.ZodType<Prisma.tblAgrEventsUpdateArgs> = z.object({ select: tblAgrEventsSelectObjectSchema.optional(), include: tblAgrEventsIncludeObjectSchema.optional(), data: z.union([tblAgrEventsUpdateInputObjectSchema, tblAgrEventsUncheckedUpdateInputObjectSchema]), where: tblAgrEventsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblAgrEventsUpdateArgs>;

export const tblAgrEventsUpdateOneZodSchema = z.object({ select: tblAgrEventsSelectObjectSchema.optional(), include: tblAgrEventsIncludeObjectSchema.optional(), data: z.union([tblAgrEventsUpdateInputObjectSchema, tblAgrEventsUncheckedUpdateInputObjectSchema]), where: tblAgrEventsWhereUniqueInputObjectSchema }).strict();