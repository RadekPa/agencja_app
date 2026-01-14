import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblTitEventsSelectObjectSchema as tblTitEventsSelectObjectSchema } from './objects/tblTitEventsSelect.schema';
import { tblTitEventsIncludeObjectSchema as tblTitEventsIncludeObjectSchema } from './objects/tblTitEventsInclude.schema';
import { tblTitEventsUpdateInputObjectSchema as tblTitEventsUpdateInputObjectSchema } from './objects/tblTitEventsUpdateInput.schema';
import { tblTitEventsUncheckedUpdateInputObjectSchema as tblTitEventsUncheckedUpdateInputObjectSchema } from './objects/tblTitEventsUncheckedUpdateInput.schema';
import { tblTitEventsWhereUniqueInputObjectSchema as tblTitEventsWhereUniqueInputObjectSchema } from './objects/tblTitEventsWhereUniqueInput.schema';

export const tblTitEventsUpdateOneSchema: z.ZodType<Prisma.tblTitEventsUpdateArgs> = z.object({ select: tblTitEventsSelectObjectSchema.optional(), include: tblTitEventsIncludeObjectSchema.optional(), data: z.union([tblTitEventsUpdateInputObjectSchema, tblTitEventsUncheckedUpdateInputObjectSchema]), where: tblTitEventsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblTitEventsUpdateArgs>;

export const tblTitEventsUpdateOneZodSchema = z.object({ select: tblTitEventsSelectObjectSchema.optional(), include: tblTitEventsIncludeObjectSchema.optional(), data: z.union([tblTitEventsUpdateInputObjectSchema, tblTitEventsUncheckedUpdateInputObjectSchema]), where: tblTitEventsWhereUniqueInputObjectSchema }).strict();