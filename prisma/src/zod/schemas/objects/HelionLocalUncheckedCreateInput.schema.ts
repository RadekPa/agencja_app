import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ISBNORG: z.string().max(13),
  ISBNHELION: z.string().max(13),
  TYTULORG: z.string().max(120).optional().nullable(),
  TYTULHELION: z.string().max(120).optional().nullable()
}).strict();
export const HelionLocalUncheckedCreateInputObjectSchema: z.ZodType<Prisma.HelionLocalUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.HelionLocalUncheckedCreateInput>;
export const HelionLocalUncheckedCreateInputObjectZodSchema = makeSchema();
